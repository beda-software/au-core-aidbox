#!/usr/bin/env bash
set -e

# Create aucore-aidbox database if it doesn't exist
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE DATABASE aucore-aidbox;
	GRANT ALL PRIVILEGES ON DATABASE aucore-aidbox TO "$POSTGRES_USER";
EOSQL
