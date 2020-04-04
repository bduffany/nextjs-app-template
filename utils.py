"""Miscellaneous utility functions."""

import os
import shlex
import subprocess
import time
from contextlib import contextmanager


def run(command: str, **kwargs):
    """Runs a shell command."""
    print(f'Running command: {command}')
    subprocess.run(shlex.split(command), **kwargs, shell=True)


@contextmanager
def working_directory(directory: str):
    """Allows temporarily changing the working directory."""
    return_path = os.getcwd()
    try:
        os.chdir(directory)
        yield
    finally:
        os.chdir(return_path)

def retry(f):
    def wrapper(*args, **kwargs):
        attempts_remaining = 5
        while True:
            try:
                attempts_remaining -= 1
                return f(*args, **kwargs)
            except:
                if attempts_remaining == 0:
                    raise
                time.sleep(2)

    return wrapper
            
