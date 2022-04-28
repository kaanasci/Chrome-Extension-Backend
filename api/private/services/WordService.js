import db from '../../src/models';
// import Joi from 'joi';

class WordService {

	static async all() {
		try {
			const words = await db.Words.findAll();
			return words;
		}
		catch (error) {
			throw error;
		}
	}

}
export default WordService;