FROM node

RUN mkdir -p /cdia-course
WORKDIR /cdia-course

ADD . /cdia-course

CMD [ 'sleep 0' ]
