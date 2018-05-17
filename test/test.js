'use strict';
import {expect} from 'chai';
import shell from 'shelljs';

const file = './test/sample.py';

describe('gulp tatsk', () => {
  it('output no errors', (done) => {
    shell.exec('gulp pylint');
    done();
  });
});
