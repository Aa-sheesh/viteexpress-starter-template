import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import boxen from 'boxen';


dotenv.config();

const app =express();
app.use(express.json());
// console.log(`Server is running at ${process.env.PORT}`);
app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.listen(process.env.PORT||5000, () => {
    console.log(`${boxen(`Server is running at PORT : ${chalk.cyan(process.env.PORT)}\nClick to access : ${chalk.green("http://localhost:5000/")}`)}`);

});
