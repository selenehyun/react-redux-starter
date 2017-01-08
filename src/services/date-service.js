import moment from 'moment';

export const getNow = () => {
    var now = moment().format('YYYY/MM/DD hh:mm:ss');
    return `${now} 입니다.`;
}

export const formatDate = (date) => {
    return moment(date).format('YYYY/MM/DD hh:mm:ss');
}