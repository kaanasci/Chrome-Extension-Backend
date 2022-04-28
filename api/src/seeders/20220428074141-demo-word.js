/* eslint-disable no-unused-vars */
'use strict';
// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Words', [ {
			name: 'future',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Words', null, {});
	}
};
