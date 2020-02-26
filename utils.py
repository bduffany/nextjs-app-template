"""Miscellaneous utility functions."""

import os
import subprocess
from contextlib import contextmanager


def run(command: str, **kwargs):
    """Runs a shell command."""
    subprocess.run(command.split(), **kwargs)


@contextmanager
def working_directory(directory: str):
    """Allows temporarily changing the working directory."""
    return_path = os.getcwd()
    try:
        os.chdir(directory)
        yield
    finally:
        os.chdir(return_path)
