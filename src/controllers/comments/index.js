module.exports = {
	createComment: async (payload) => {
		const {
			organization_name,
			body
		} = payload

		// validate comment exist
		if (!body.comment) {
			const err = new Error()
			err.statusCode = 400
			err.message = 'Comment is required'
			throw err
		}

		// validate comment empty
		if (!body.comment.trim()) {
			const err = new Error()
			err.statusCode = 400
			err.message = 'Comment is should not be empty'
			throw err
		}


		return payload
  }
}