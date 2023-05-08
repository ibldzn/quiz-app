#!/usr/bin/env python3

from bs4 import Tag, BeautifulSoup
import json


def parse_question_div(question_div: Tag, answer_index: int):
    question_text = " ".join(
        question_div.find("span", {"class": "M7eMe"}).text.strip().split()
    )

    answer_choices = []
    choices_div = question_div.find("div", {"class": "lLfZXe"})
    for label in choices_div.find_all("label"):
        answer_choices.append(" ".join(label.text.strip().split()))

    # get the image source URL (if it exists)
    image_div = question_div.find("div", {"class": "y6GzNb"})
    if image_div:
        image_src = image_div.find("img")["src"]
    else:
        image_src = None

    return {
        "question": question_text,
        "answer": answer_index % len(answer_choices),
        "choices": answer_choices,
        "image": image_src,
    }


with open("./site-files/index.html") as file:
    soup = BeautifulSoup(file, "html.parser")
    question_divs = soup.find_all("div", {"jsmodel": "CP1oW"})

    with open("questions.json", "w", encoding="utf-8") as out_file:
        arr = [
            parse_question_div(question_div, i)
            for i, question_div in enumerate(question_divs)
        ]
        json.dump(arr, out_file, ensure_ascii=False, indent=2)
