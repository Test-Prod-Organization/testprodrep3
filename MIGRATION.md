# Removed Deprecated Configuration Keys

The following configuration keys have been removed as of v2.0:

- `LEGACY_AUTH_MODE` - replaced by `AUTH_PROVIDER`
- `OLD_DB_POOL_SIZE` - replaced by `DB_CONNECTION_POOL`
- `ENABLE_V1_API` - v1 API has been sunset
- `SMTP_LEGACY_PORT` - use `SMTP_PORT` instead

## Migration

If your `.env` still contains these keys, remove them.
No functional changes — these keys were already ignored since v1.8.
