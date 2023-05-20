from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse


from flask import request

incoming_msg = request.values.get('Body', '').lower()


from twilio.twiml.messaging_response import MessagingResponse

response = MessagingResponse()
msg = response.message()
msg.body('this is the response/reply from the bot.')
