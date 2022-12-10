# NoteCreator

github link: https://github.com/CS411-Team-Project/note_creator

## What It Is
The overall idea of NoteCreator is to create a platform which will take the audio of live lectures, and create a easy-to-read note document. 

## Using NoteCreator
The users first need to log in to access their own files. When they are logged in, they will have access to the notes that they have created. Also, they can start taking notes once they are logged in. When the users start to take notes, NoteCreator will take the audio of a lecture in live, and it will transcibe and, using Grammarly, create readable notes.

## What NoteCreator Will Be Built With
### APIs to Transcribe and Create Notes
- Twilio API: https://www.twilio.com/docs/usage/api
- VOSK
- Grammarly API: https://developer.grammarly.com/docs/api/

### Front-End Architecture
- React.js

### Back-End Architecture
- Node.js backend functioning as an API for the web app to make calls and get data from
- HTTP Requests: Axios or Ky (npmjs.com/package/ky) or Superagent (npmjs.com/package/superagent)
- Database: SQL or PostgreSQL

## Possible Features
Download Notes: After the note is created, the users can access it online, and also they can download it to keep in their local files.