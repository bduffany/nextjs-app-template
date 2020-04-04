"""Test for create_next_app."""

import os
import shutil
import sys

from utils import retry, run

if __name__ == '__main__':
    TEST_DIR = os.path.join(os.path.dirname(sys.argv[0]), 'test')

    print('Preparing test directory...')

    @retry
    def reset_test_dir():
        if os.path.exists(TEST_DIR):
            shutil.rmtree(TEST_DIR)
        os.mkdir(TEST_DIR)

    reset_test_dir()
    os.chdir(TEST_DIR)

    run("python3 ../create_next_app.py")
