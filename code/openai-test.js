import OpenAI from 'openai';

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'Who is carl' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
}

main();

// your-script.js
// import OpenAI from 'openai';

// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
//     model: 'gpt-3.5-turbo',
//   });

//   console.log(completion.choices[0]);
// }

// main();

//! With comments ------------------------------------

// // Import the OpenAI module
// import OpenAI from 'openai';

// // Create an instance of the OpenAI class
// const openai = new OpenAI();

// // Define an asynchronous function named 'main'
// async function main() {
//   // Use the OpenAI API to generate a completion for a chat prompt
//   const completion = await openai.chat.completions.create({
//     // Provide a chat prompt as an array of messages
//     messages: [{ role: 'system', content: 'Who is carl' }],
//     // Specify the model to use for generating the completion
//     model: 'gpt-3.5-turbo',
//   });

//   // Log the completion choices to the console
//   console.log(completion.choices[0]);
// }

// // Call the 'main' function to initiate the chat completion process
// main();
