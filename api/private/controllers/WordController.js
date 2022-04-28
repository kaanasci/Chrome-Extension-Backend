import WordService from '../services/WordService';

class WordController {

	static async all(req, res) {
		try {
			const result = await WordService.all();
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default WordController;