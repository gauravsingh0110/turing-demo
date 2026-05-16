#!/usr/bin/env python3

from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def root():
    return "Hello from Turing platform"

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Turing platform"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=False)


