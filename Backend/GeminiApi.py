from flask import Flask, request, jsonify
import google.generativeai as genai
import os

# Set your Gemini API key
GOOGLE_API_KEY = "AIzaSyA3WYav-QMhDyA35rTQdFpJC3bLgnGRy_g"
genai.configure(api_key=GOOGLE_API_KEY)

# Load Gemini model
from flask import Flask, request, jsonify
import google.generativeai as genai

# Initialize the model
model = genai.GenerativeModel('gemini-2.5-flash')

app = Flask(__name__)

# Define allowed rule-related keywords
RULE_KEYWORDS = ['law', 'rule', 'section', 'act', 'article', 'clause', 'legal', 'rights', 'penalty', 'regulation']

def is_rule_related(prompt):
    prompt_lower = prompt.lower()
    return any(keyword in prompt_lower for keyword in RULE_KEYWORDS)

@app.route('/ask_gemini', methods=['POST'])
def ask_gemini():
    data = request.get_json()
    prompt = data.get('prompt', '')

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
    app.run(debug=True)
