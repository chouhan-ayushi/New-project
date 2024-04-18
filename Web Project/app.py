from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

# Connect to your MySQL database
conn =mysql.connector.connect(
    host='localhost',
    user='root',
    port='8827',
    password='Gmail042003@G',
    database='admission_details_data'
)

cursor = conn.cursor()
cursor.execute('DROP TABLE IF EXISTS form_data')
cursor.execute('''
    CREATE TABLE IF NOT EXISTS form_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        dob DATE,
        gender VARCHAR(10),
        father_name VARCHAR(255),
        mother_name VARCHAR(255),
        email VARCHAR(255),
        address VARCHAR(255),
        phone VARCHAR(15),
        caste VARCHAR(20),
        religion VARCHAR(20),
        subject_12th VARCHAR(20),
        passing_year_12th VARCHAR(10),
        percentage_12th TEXT,
        percentage_10th VARCHAR(10),
        extracurricular TEXT,
        blood_group VARCHAR(5)
    )
''')

conn.commit()

@app.route('/')
def index():
    return render_template('admission.html')

@app.route('/submit', methods=['POST'])
def submit():

    name = request.form['name']
    dob = request.form['dob']
    gender = request.form['gender']
    father_name = request.form['father_name']
    mother_name = request.form['mother_name']
    email = request.form['email']
    address = request.form['address']
    phone = request.form['phone']
    caste = request.form['caste']
    religion = request.form['religion']
    subject_12th = request.form.get('subject_12th', '')
    passing_year_12th = request.form['passing_year_12th']
    percentage_12th = request.form['percentage_12th']
    percentage_10th = request.form['percentage_10th']
    extracurricular = request.form['extracurricular']
    blood_group = request.form['blood_group']
    

    cursor.execute('''
        INSERT INTO form_data
        (name, dob, gender, father_name, mother_name, email, address, phone, caste, religion,
        subject_12th, passing_year_12th, percentage_12th , percentage_10th, extracurricular, blood_group)
        VALUES (%s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', (name, dob, gender, father_name, mother_name, email, address, phone, caste, religion,
               subject_12th, passing_year_12th, percentage_12th, percentage_10th, extracurricular, blood_group))

    conn.commit()
    conn.close()
    return "Form submitted successfully!"

@app.route('/display_data')
def display_data():
    cursor.execute('SELECT * FROM form_data')
    data = cursor.fetchall()
    return render_template('display_data.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
