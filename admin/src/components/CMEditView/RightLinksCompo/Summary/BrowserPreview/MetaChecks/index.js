import React from 'react';

import _ from 'lodash';

import { Icon } from '@strapi/design-system/Icon';
import { Stack } from '@strapi/design-system/Stack';
import { Typography } from '@strapi/design-system/Typography';

import Dot from '@strapi/icons/Dot';

const MetaChecks = ({ item, max, label, minLimit = false }) => {
  return (
    <Stack size={1} horizontal background="neutral0">
      <Icon
        aria-hidden={true}
        colors={(theme) => ({
          rect: {
            fill: _.get(
              theme,
              `colors.${
                item.length >= max ||
                (label === 'title' && item.length === 0) ||
                (minLimit && label === 'description' && item.length <= 500)
                  ? `danger`
                  : `success`
              }600`
            ),
          },
        })}
        as={Dot}
      />
      <Typography>
        {`Your ${label} is ${item.length || 0} characters long (max ${max})`}
      </Typography>
    </Stack>
  );
};

export default MetaChecks;
