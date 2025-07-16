from flask import Flask, request, jsonify, session
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Sibasish@1234'
app.config['MYSQL_DB'] = 'java01'

CORS(app)  # Allow requests from React frontend

mysql = MySQL(app)

@app.route('/feedback_api', methods=['POST'])
def login():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message=data.get('message')

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO feedbackform VALUES(%s,%s,%s) ", (name,email,message))
    mysql.connection.commit()
    return jsonify({'status':'success','message':'Your message was recieved'}),200

if __name__ == '__main__':
    app.run(debug=True)
