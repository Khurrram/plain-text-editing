# Rethink Plaintext Editing

Hello! This is my response to the challenge.

Here are some new features:
- Plain Text Editing on ALL .txt files, increased box size + auto overflow
- Real Time Markdown Editing, where two boxes are given, one of which is labeled Editor and other Preview. As you enter new markdown into the editor section, the Preview section simultaneously updates!
- MongoDB functionality: I added MongoDB Atlas to the backend! Now all files will persist through reloads/different active files!

Here are some updates for the future (aka if I had more time):
- Ability to add new documents.
- Ability to rename documents.
- Ability to upload images.
- Code preview?

To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm run dev`
- Open `localhost:3000` in your browser
- Change MongoDB config in server/config/db.config.js to your own mongodb atlas, input some raw data through atlas 
- Enjoy!
