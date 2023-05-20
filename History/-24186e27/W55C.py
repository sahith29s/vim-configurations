from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse


from flask import request

incoming_msg = request.values.get('Body', '').lower()


from twilio.twiml.messaging_response import MessagingResponse

response = MessagingResponse()
msg = response.message()
msg.body('this is the response/reply from the bot.')


# chatbot logic
def bot():

	# user input
	user_msg = request.values.get('Body', '').lower()

	# creating object of MessagingResponse
	response = MessagingResponse()

	# User Query
	q = user_msg + "geeksforgeeks.org"

	# list to store urls
	result = []

	# searching and storing urls
	for i in search(q, tld='co.in', num=6, stop=6, pause=2):
		result.append(i)

	# displaying result
	msg = response.message(f"--- Results for '{user_msg}' ---")
	for result in search_results:
		msg = response.message(result)

	return str(response)
