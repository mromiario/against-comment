## Against Comment Organization
### Prerequisite
        - Installed Docker
        - Postgrestql
Please running `docker-compose build` in the time you clone this repository.

- Import your `.env` text. For the env example you can go to this file [env.example](https://github.com/mromiario/against-comment/blob/main/.env.example)
	
    - `NODE_ENV` you can fill it with `development`
    - `POSTGRES_DB` your postgres host database, you can fill it with `db` since we used image from docker container.
    - `POSTGRES_USER` your postgres user name
    - `POSTGRES_PASSWORD` your password of postgres user
    - `POSTGRES_DB` your database name
    - `POSTGRES_PORT` your allocated port of database
    - `EXPRESS_PORT`your allocated port for running the express server
- For running the express server you can run this command in your terminal `docker-compose up -d`, then `docker-compose logs -f --tail=100 api`
- API Docs:
	- You can visit API Docs in [here](https://documenter.getpostman.com/view/5194150/UVJZpK6P#2bfb01dc-05f2-4c37-b512-7a80a9180d7a)

- For **Unit Testing** you can run `docker exec api npm test`