import { axiosClient } from '@utils/axios/common_axios';
import { type ClassInfoDTO } from '@utils/dtos/class_dtos';

type GetClassesProps = {
  pageSize?: string;
  lastClassId?: string;
  gteSessionStartDate?: Date;
};

export async function getClassesAsync(props: GetClassesProps) {
  const { gteSessionStartDate, lastClassId, pageSize } = props;
  const { data } = await axiosClient().get<ClassInfoDTO[]>(process.env.NODE_ENV, {
    params: {
      pageSize: pageSize || '10',
      lastId: lastClassId,
      gteDate: gteSessionStartDate,
    },
  });
  return data;
}
