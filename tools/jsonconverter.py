#!/usr/bin/env
""" 
    jsonconverter.py

    Converts a word file with a title and questions/answers to json.
    The first line of the file is the title.
    Following are question/answer pairs, separated by a back slash.
    The question and answers are separated by a dash
    
    parts taken from: http://github.com/mikemaccana/python-docx
"""

import os
import sys
import json

from docx import *

def grab_text_from_doc(path_to_doc):
    """Uses docx module to get text from word doc."""
    try:
        doc = opendocx(path_to_doc)
    except:
        print("Bad input file.")
        exit()
    doc_text = getdocumenttext(doc)
    return doc_text

def process_text(doc_text):
    """Convert list of document text to python dictionary of flashcards."""
    flashcards = {}
    flashcards['title'] = doc_text[0]
    flashcards['cards'] = []
    # create list of question and answers from text list
    q_and_a_list = ':::'.join(doc_text[2:]).split(':::/:::')
    # split list into tuples of questions and answers
   # for i, item in enumerate(q_and_a_list):
   #     print item
   #     print len(item)
   #     if len(item) < 1:
   #       print 'here'
   #       q_and_a_list[i].append(None)
   # tuple_seq = [(item.split(":::-:::")[0], 
   #               item.split(":::-:::")[1]) 
   #                 for item in q_and_a_list]
    tuple_seq = [_split_items(item) for item in q_and_a_list]
    # convert ::: to newline in questions and answers
    tuple_seq = [_convert_to_newlines(item) for item in q_and_a_list]
    #tuple_seq = [("\n".join(item[0].split(":::")), 
    #              "\n".join(item[1].split(":::"))) 
    #                for item in tuple_seq]
    # create a list of question/answer dictionaries
    dict_seq = [{'question': item[0], 'answer': item[1]} 
                    for item in tuple_seq]
    flashcards['cards'] = dict_seq
    return flashcards

def _split_items(item):
    x = item.split(":::-:::")
    if len(x) == 2:
        return (x[0], x[1])
    else:
        return (x[0], None)

def _convert_to_newlines(item):
    x = item.split(":::-:::")
    if len(x) == 2:
        return("\n".join(item[0].split(":::")), 
               "\n".join(item[1].split(":::")))    
    else:
        return ("\n".join(item[0].split(":::")), None)

def save_as_json(flashcards, json_file):
    """Convert dict to json and save flashcards."""
    flashcard_json = json.dumps(flashcards)
    with open(json_file, 'w') as f:
        f.write(flashcard_json)
    
def _get_directories():
    """Return directories for word docs and json."""
    root_dir = os.path.realpath(__file__).partition('tools')[0]
    doc_dir = root_dir + "questions/"
    json_dir = root_dir + "app/data/flashcards/"
    return (doc_dir, json_dir)


if __name__ == '__main__':

    doc_name = sys.argv[1]
    json_name = doc_name.rpartition('.')[0] + '.json'
    doc_dir, json_dir = _get_directories()
    path_to_doc = doc_dir + doc_name
    path_to_json = json_dir + json_name

    doc_text = grab_text_from_doc(path_to_doc)
    flashcard_dict = process_text(doc_text)
    save_as_json(flashcard_dict, path_to_json)
