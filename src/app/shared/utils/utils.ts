import {TranslateService} from '@ngx-translate/core';

export const convertEnumToArray = (o: any, translationService: TranslateService, key: string) => {
  const resultArray = [];
  for (const [propertyKey, propertyValue] of Object.entries(o)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    resultArray.push({
      key: propertyValue,
      translation: translationService.instant(key + propertyKey),
      value: propertyKey
    });
  }
  return resultArray;
};
