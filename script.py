from flask import Flask,render_template

app=Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")


@app.route('/about/')
def about():
    return render_template("about.html")

@app.route('/photo/')
def photo():
    return render_template("photo.html")


@app.route('/programming/')
def programming():
    return render_template("programming.html")

@app.route('/apps/')
def apps():
    return render_template("apps.html")

@app.route('/film/')
def film():
    return render_template("film.html")


@app.route('/blog/')
def blog():
    return render_template("blog.html")

if __name__=="__main__":
    app.run(debug=True)

#python3 -m venv virtual: run this code in terminal to create a virtual environment
#Chukwyenum-MacBook-Pro:mysite chukwuyenumopone$ python3 -m venv virtual
#Chukwyenum-MacBook-Pro:mysite chukwuyenumopone$ virtual/bin/python3
#Chukwyenum-MacBook-Pro:mysite chukwuyenumopone$ virtual/bin/pip install flask
