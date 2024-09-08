import { BuilderContext, createBuilder } from "@angular-devkit/architect"
import { getSystemPath, JsonObject, noCacheNormalize } from "@angular-devkit/core";
import { promises as fs } from "fs";

interface Options extends JsonObject {
  /** Knock knock joke */
  knockKnock: boolean;

  /** General joke */
  general: boolean;
}

const JOKES = {
  knockKnock: [{
    line1: 'Knock knock',
    line2: 'Who?',
    line3: 'You know',
    line4: 'You know who',
    line5: 'Avada kadavara (Lord Voldemort, he who must not be named)'
  }],
  general: [{
    line1: 'What is the best thing about Switzerland?',
    line2: 'The flag is a big plus'
  }]
}

export default createBuilder((options: Options, context: BuilderContext) => {
  context.logger.info('Builder execution has started');
  let path = '';
  if (options.knockKnock) {
    path = `${getSystemPath(noCacheNormalize(context.workspaceRoot))}/knock-knock.json`;
    context.logger.info(path);
    fs.writeFile(path, JSON.stringify(JOKES.knockKnock))
  } else if (options.general) {
    path = `${getSystemPath(noCacheNormalize(context.workspaceRoot))}/general-joke.json`;
    context.logger.info(path);
    fs.writeFile(path, JSON.stringify(JOKES.general))
  } else {
    context.logger.error('No options were passed to the builder.')
    return {
      success: false,
      error: 'Options not sent'
    }
  }

  return {
    success: true
  }
});