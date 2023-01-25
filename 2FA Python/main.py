import smtplib

import psycopg2
import getpass
from email.message import EmailMessage
import ssl

# data to connect to database
DbHost = "195.150.230.208"
DbUser = "2022_grzeszczuk_szymon"
DbName = "2022_grzeszczuk_szymon"
DbPassword = "34287"
DbPort = "5432"


def register():
    print("Register your account \n")

    login = input("Enter your desired login: ")
    mail = input("Enter your email: ")
    password = input("Enter your password: ")

    try:
        conn = psycopg2.connect(
            dbname=DbName,
            user=DbUser,
            password=DbPassword,
            host=DbHost,
            port=DbPort
        )
        cur = conn.cursor()
    except ConnectionError:
        print("Connection with database failed")
        return

    try:
        cur.execute('INSERT INTO kryptografia.users (login, mail, password) VALUES (%s, %s, %s)',
                    (login, mail, password))
    except ConnectionError:
        print("Error while executing query")
        cur.close()
        conn.close()
        return

    conn.commit()
    cur.close()
    conn.close()

    print("Successfully registered!")


def login():
    login = input("Enter your login: ")
    password = input("Enter your password: ")

    try:
        conn = psycopg2.connect(
            dbname=DbName,
            user=DbUser,
            password=DbPassword,
            host=DbHost,
            port=DbPort
        )
        cur = conn.cursor()
    except ConnectionError:
        print("Connection with database failed")
        return

    try:
        cur.execute('SELECT * FROM kryptografia.users WHERE login = %s AND password = %s',
                    (login, password))
        result = cur.fetchone()
    except ConnectionError:
        print("Error while executing query")
        cur.close()
        conn.close()
        return

    cur.close()
    conn.close()

    if result:
        print("Successfully logged in!")
    else:
        print("Invalid login or password.")


def send_mail(authentication_code):
    email_sender = 'shyymoons@gmail.com'
    email_password = 'passwordToPaste'

    email_receiver = 'szymon3520@gmail.com'

    subject = "Kryptografia i bezpieczeństwo aplikacji - email weryfikacyjny"
    body = "Twój kod weryfikacyjny to: " + authentication_code

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())


if __name__ == "__main__":
    send_mail("qwer")
    # while 1:
    #     choice = input("Do you want to (r)egister or (l)ogin? ")
    #     if choice == "r":
    #         register()
    #         break
    #     elif choice == "l":
    #         login()
    #         break
    #     else:
    #         print("Invalid choice. \n")
