import Heroku from 'heroku-client';

export default class HerokuApiManager {
  getCurrentAccount = (token: string) => {
    const heroku = new Heroku({ token: token });
    heroku.get('/account').then((account) => {
      console.log(account);
    });
  };

  getHerokuApps = (token: string) => {
    const heroku = new Heroku({ token: token });
    heroku.get('/apps').then((apps) => {
      console.log(apps);
    });
  };

  createHerokuApp = (name: string, token: string) => {
    const heroku = new Heroku({ token: token });
    heroku.post('/apps', { body: { name: name } }).then((app) => {
      console.log(app);
    });
  };

  deleteHerokuApp = (name: string, token: string) => {
    const heroku = new Heroku({ token: token });
    heroku.delete(`/apps/${name}`).then((app) => {
      console.log(app);
    });
  };

  createBuild = (
    name: string,
    version: string,
    tgz_url: string,
    buildpack: string,
    token: string
  ) => {
    // BuildPack Names: https://devcenter.heroku.com/articles/buildpacks#officially-supported-buildpacks
    const heroku = new Heroku({ token: token });
    heroku
      .post(`/apps/${name}/builds`, {
        buildpacks: [
          {
            name: name,
            url: `https://github.com/heroku/heroku-buildpack-${
              buildpack.split('/')[1]
            }`,
          },
        ],
        source_blob: {
          url: tgz_url,
          version: version,
        },
      })
      .then((build) => {
        console.log(build);
      });
  };

  getBuildInfo = (app_name: string, build_id: string, token: string) => {
    const heroku = new Heroku({ token: token });
    heroku.get(`/apps/${app_name}/builds/${build_id}`).then((build) => {
      console.log(build);
    });
  };

  listBuilds = (app_name: string, token: string) => {
    const heroku = new Heroku({ token: token });
    heroku.get(`/apps/${app_name}/builds`).then((builds) => {
      console.log(builds);
    });
  };

  updateBuildpackInstallation = (
    app_name: string,
    buildpack_name: string,
    token: string
  ) => {
    const heroku = new Heroku({ token: token });
    heroku
      .put(`/apps/${app_name}/buildpack-installations`, {
        updates: [
          {
            buildpack: `https://github.com/heroku/heroku-buildpack-${buildpack_name}`,
          },
        ],
      })
      .then((res) => {
        console.log(res);
      });
  };

  listBuildpackInstallations = (app_name: string, token: string) => {
    const heroku = new Heroku({ token: token });
    heroku
      .get(`/apps/${app_name}/buildpack-installations`)
      .then((buildpacks) => {
        console.log(buildpacks);
      });
  };

  //* Below Features Will be implemented as they are needed
  //TODO: https://devcenter.heroku.com/articles/platform-api-reference#dyno
  // createDyno = (app_name: string, token: string) => {
  //   const heroku = new Heroku({ token: token })
  //   heroku.post(`/apps/${app_name}/dynos`, {})
  // }

  //TODO: https://devcenter.heroku.com/articles/platform-api-reference#pipeline

  //TODO: https://devcenter.heroku.com/articles/platform-api-reference#plan
}
