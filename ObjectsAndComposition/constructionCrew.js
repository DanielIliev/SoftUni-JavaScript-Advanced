function constructionCrew(workerObject) {
    if (workerObject.dizziness == true) {
      workerObject.levelOfHydrated = (0.1 * workerObject.weight * workerObject.experience) + workerObject.levelOfHydrated;
      workerObject.dizziness = false;
      return workerObject;
    } else {
      return workerObject;
    }
  }