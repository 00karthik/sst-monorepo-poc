const { ENV } = process.env;

export const isLocalDevelopment = ENV === 'LOCAL';

export default {
  LOGZ_IO_TOKEN: process.env.LOGZ_IO_TOKEN!,
  HSK_DB_URL: process.env.HSK_DB_URL!,
  HSK_DB_IDENTIFIER: process.env.HSK_DB_IDENTIFIER!,
  ENV,
};
