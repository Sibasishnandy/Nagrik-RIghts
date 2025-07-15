from flask import Flask,request,jsonify
from flask_mysqldb import MySQL

app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Sibasish@1234'
app.config['MYSQL_DB'] = 'java01'

mysql=MySQL(app)


@app.route('/registration_api',methods=['POST'])
def login():
  data=request.get_json()

  username=data.get('username')
  password=data.get('password')

  if not username or not password:
    return jsonify({'Invalid credentials':'Enter right data'})
  
  cur=mysql.connection.cursor()

  cur.execute('SELECT COUNT(*) FROM USERS WHERE username=%s', (username,))
  existing_user = cur.fetchone()

    # If count is greater than 0, user already exists
  if existing_user[0] > 0:  # existing_user[0] contains the count
      return jsonify({'message': 'User already exists'}), 409  # 409 Conflict
  else:
      cur.execute('INSERT INTO USERS VALUES(%s,%s)',(username,password))
      mysql.connection.commit()
      return jsonify({'Registration done':'all okay'})
  
if __name__ == '__main__':
    app.run(debug=True)

