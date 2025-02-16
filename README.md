# MongoDB $toDouble Error Handling

This repository demonstrates a common error encountered when using the `$toDouble` operator in MongoDB queries and provides a solution.

## Problem

The provided code snippet attempts to filter documents based on a numerical comparison. However, `$toDouble` can produce an error if it encounters non-numeric values in the specified field.  This may lead to query failures, particularly when the field contains null values or values that cannot be coerced into a number.

## Solution

The solution involves checking if the field is a valid number before applying the numerical comparison using the `$type` operator to ensure data integrity.
