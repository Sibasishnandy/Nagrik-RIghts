from flask import Flask, request, jsonify, session
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)

# Define configuration directly in the app.py
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Sibasish@1234'
app.config['MYSQL_DB'] = 'java01'
# app.config['SECRET_KEY'] = 'your_secret_key'

# CORS(app)  # Allow requests from React frontend

mysql = MySQL(app)

@app.route('/validation_api', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'status': 'error', 'message': 'Missing username or password'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cur.fetchone()
    cur.close()

    if user:
        return jsonify({'status': 'success', 'message': 'Login successful', 'username': username}), 200
    else:
        return jsonify({'status': 'fail', 'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
