---
slug: /analytics/email-notification
id: email-notification      
title: Alert Notification via Email
sidebar_label: Alert Notification via Email
---

The purpose of **email notifications** is to proactively inform users without requiring automated monitoring routines. This allows customers to take immediate action to maintain **high-quality streams**.

By receiving notifications as issues occur, users gain a better understanding of the causes and the impact on end users, helping them respond quickly and effectively.

---
### How It Works

Email notifications are sent for each stream in the following cases:

- A new alert has been detected  
- An ongoing alert, with reminders every 12 hours  
- An alert has been resolved  
---

### Email Contents

<!-- | Field                  | Description                          |
|-------------------------|--------------------------------------|
| **Alert Details**       |                                      |
| Alert name              | Name of the alert                    |
| Alert severity          | The alert’s level of urgency         |
| Alert message           | Detailed description of the alert    |
| Alert code              | Unique code for the alert            |
| Alert ID                | Identifier of the alert              |
| First detection time    | When the alert was first detected    |
| Alert age               | How long the alert has been active   |
| **Stream Details**      |                                      |
| Stream name             | The stream in which the alert occurred |
| Used stream tags        | Tags applied to the stream           |
| Streamgroup ID          | Identifier of the stream group       |
| Transcoded streams      | Transcoded streams                   | -->
#### Alert Details
| Field                  | Description                          |
|-------------------------|--------------------------------------|
| Alert name              | Name of the alert                    |
| Alert severity          | The alert’s level of urgency         |
| Alert message           | Detailed description of the alert    |
| Alert code              | Unique code for the alert            |
| Alert ID                | Identifier of the alert              |
| First detection time    | When the alert was first detected    |
| Alert age               | How long the alert has been active   |


#### Stream Details
| Field                  | Description                          |
|-------------------------|--------------------------------------|
| Stream name             | The stream in which the alert occurred |
| Used stream tags        | Tags applied to the stream           |
| Streamgroup ID          | Identifier of the stream group       |
| Transcoded streams      | Transcoded streams                   |

---

### Useful Links Included in the Email

- **Troubleshooting page** – provides more details about alerts and streams  
- **Test playback page** – allows reviewing the live stream and checking live quality metrics  
- **Email subscription management page** – allows managing alert recipients for notifications, including adding or removing users 

---