# NoteCreator

github link: https://github.com/CS411-Team-Project/note_creator

## What it is
The overall idea of the NoteCreator is to create a platform which will take the audio of the lecture, and create a easy-to-read note. 

## Using the NoteCreator
The users first need to log in to access their own files. When they are logged in, they will have access to the notes they have created. Also, they can start taking the note once they are logged in. When the users start to take note, the NoteCreator will take the audio of the lecture in live, and it will transcibe and, using grammarly,  create readable note.

## What NoteCreator will be built with
### APIs to transcribe and create note
- Twilio API: https://www.twilio.com/docs/usage/api
- VOSK
- Grammarly API: https://developer.grammarly.com/docs/api/

### Front-end architecture
- React.js

Back-end architecture
- Node.js backend functioning as an API for web app to make calls and get data from
- HTTP Requests: Axios or Ky (npmjs.com/package/ky) or Superagent (npmjs.com/package/superagent)
- Database: SQL or PostgreSQL

## Possible features
Download Notes: After the note is created, the users can access it online, and also they can download it to keep in their local files.