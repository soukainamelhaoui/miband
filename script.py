import requests
import time
import random
import json
from datetime import datetime

def send_heartbeat():
    url = "http://154.49.137.28:8080/addHeartbeatClient"
    current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
    data = {
        "mac": "ad:12:19:df",
      "data1": str(random.randint(49, 90)),#HEARTBEAT
        "data2": str(random.randint(35, 45)),#TEMPERATURE
        "data3": str(random.randint(80, 160)),
        "data4": "",
        "date_prelevement": current_datetime
    }

    print("Data being sent:", data)  # Print the data before sending the request

    response = requests.post(url, json=data)
    if response.status_code == 200:
        print("Heartbeat sent successfully")
    else:
        print(f"Failed to send heartbeat. Error: {response.text}")

while True:
    send_heartbeat()
    time.sleep(5)