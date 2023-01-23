"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

# TODO: define the 'EXPECTED_BAKE_TIME' constant
# TODO: consider defining the 'PREPARATION_TIME' constant
#       equal to the time it takes to prepare a single layer
EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 5

# TODO: define the 'bake_time_remaining()' function
def bake_time_remaining(bake_time=0):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - bake_time

# TODO: define the 'preparation_time_in_minutes()' function
#       and consider using 'PREPARATION_TIME' here
def preparation_time_in_minutes(layers):
    """Calculate the time it takes to prep based on layers

    :param layers: int - the number of layers
    :return: int - time to prepare in minutes

    Function that gives the time in minutes based on the number of layers (two per layer)
    """

    return layers * 2

# TODO: define the 'elapsed_time_in_minutes()' function
def elapsed_time_in_minutes(layers, bake_time):
    """Calculate time spent making the lasagna

    :param layers: int - the number of layers
    :return: int - number of minutes spent baking total so far

    Function that gives the amount of time total in preparation and baking so far based on layers and current bake time
    """

    return preparation_time_in_minutes(layers) + bake_time
