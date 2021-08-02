# @hydralite/api

## Getting started

### With Docker

1. From the root directory, cd into `docker/`
2. In the docker directory, run the `yarn api:start` command to get redis, postgres and the api running on your local environment.

If you also want to setup redis insight, run the `yarn dbg:start` command to get redis, redis insight, and postgres running on your local environment. Then, manually start the api.

### Normally

1. From the root directory, cd into `api/`
2. First, Run `yarn` to install all dependencies.
3. Then, Run `yarn setup` to simulate an intuitive environment setup procedure.
4. Finally, run `yarn dev` to start the development server on the port you specified (fallback is 8000)