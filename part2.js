'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dealership-inventory')

const app = express();

app.get('/', (req,res) => res.send('Port 3000 is working!'));

app.listen(3000, () => console.log('Listening on port 3000'));


const Vehicle = mongoose.model('Vehicle', {
	make: String,
	model: String,
	year: String,
	color: String,
	vin: String
});

function getCars() {
	return Vehicle.find().exec();
};

function createCar(car) {
	return Vehicle.update(car, {new: true}).exec();
};

 app.get('/vehicle', (req,res) => {
	return getCars().then(cars => {
		res.json(cars);
	});
});

var newCar = {
	make: 'Honda',
	model: 'Accord',
	year: '2007',
	color: 'blue',
	vin: '1G1JE5SHXC4195830'
};

app.get('/add-vehicle', (req,res) => {
	return createCar(newCar).then(car => {
		res.json(car);
	})
})
