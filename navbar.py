"""
    To be moved to the server file!!
"""


@app.route("/")
def index():
    # contact us page in index
    if request.method == "POST":
        message = request.form.get("message")
        sender = request.form.get('email')
        name = request.form.get("name")
        msg = Message(message, sender=(name, sender),
                  recipients=["to@example.com"])
        mail.send(msg)
        return redirect(url_for('index'))
    return render_template('index.html')

@app.route('/home')
def home():
    return redirect(url_for('get_meals'))

@app.route("/about")
def about():
    return render_template('about.html')

@app.route('/blog')
def blog():
    render_template('blog.html')

@app.route("/order")
def order():
    return url_for('login')

