#!/usr/bin/env
""" 
    jsonconverter.py

    Converts a word file with a title and questions/answers to json.
    The first line of the file is the title.
    Following are question/answer pairs, separated by a back slash.
    The question and answers are separated by a dash
    
    parts taken from: http://github.com/mikemaccana/python-docx
"""

import sys
import json

from docx import *

if __name__ == '__main__':
    try:
        document = opendocx(sys.argv[1])
        newfile = open(sys.argv[2],'w')
    except:
        print('Please supply an input and output file. For example:')
        print(''' example-extracttext.py 'My Office 2007 document.docx' 'outputfile.txt' ''')
        exit()

    ## Fetch all the text out of the document we just created
    paratextlist = getdocumenttext(document)

    # Make explicit unicode version
    newparatextlist = []
    for paratext in paratextlist:
        newparatextlist.append(paratext.encode("utf-8"))
    
    ## Print our documnts test with two newlines under each paragraph
    newfile.write('\n\n'.join(newparatextlist))
    #print '\n\n'.join(newparatextlist)
