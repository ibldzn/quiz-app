#!/usr/bin/env python3

import json
import requests


with open("./questions.json") as f:
    questions = json.load(f)

    for question in questions:
        resp = requests.post("http://localhost:8082/api/questions", json=question)
        try:
            resp.raise_for_status()
        except requests.exceptions.HTTPError as e:
            print(f"Failed to migrate question: {question}")
            exit(1)
