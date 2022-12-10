# NoteCreator

## What It Is
The overall idea of the NoteCreator is to create a platform which will take the audio of an oral lecture and create a easy-to-read document.

## Using the NoteCreator
The users first need to log in to application in order to access their own files. When logged in, the users will be able to create a note document. When the users start to take notes, the NoteCreator will take the audio of the lecture in live, and it will transcibe and, using Grammarly, create readable notes.

## What NoteCreator Will Be Built With
### APIs to Transcribe and Create Notes
- Twilio API: https://www.twilio.com/docs/usage/api
- VOSK: https://alphacephei.com/vosk/
- Grammarly API: https://developer.grammarly.com/docs/api/

### Front-End Architecture
- React.js

### Back-End Architecture
- Node.js backend functioning as an API for web application to make calls and retrieve data from
- HTTP Requests: Axios or [Ky](npmjs.com/package/ky) or [Superagent](npmjs.com/package/superagent)
- Database: SQL or PostgreSQL

## Possible Features
Download Notes: After the note is created and transcribed, the users can access it online, and also they can download it to keep in their local files.