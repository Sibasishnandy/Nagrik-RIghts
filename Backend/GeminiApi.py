from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-2.5-flash')

# Flask app setup
app = Flask(__name__)
CORS(app)  # Allow all origins; for production, restrict to frontend domain

# Define allowed rule-related keywords
RULE_KEYWORDS = [
    'law', 'rule', 'section', 'act', 'article', 'clause',
    'legal', 'rights', 'penalty', 'regulation', 'constitution',
    'fundamental', 'arrest', 'fir', 'justice', 'remedy', 'court'
]

def is_rule_related(prompt):
    prompt_lower = prompt.lower()
    return any(keyword in prompt_lower for keyword in RULE_KEYWORDS)

@app.route('/ask_gemini', methods=['POST'])
def ask_gemini():
    data = request.get_json()
    prompt = data.get('prompt', '').strip()

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    # Check if the prompt is rule-related
    if not is_rule_related(prompt):
        return jsonify({"error": "Only rule-related queries are allowed."}), 403

    try:
        response = model.generate_content(prompt)
        return jsonify({"response": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)