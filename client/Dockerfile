FROM python:3.11 
RUN pip install pipenv
RUN mkdir -p /home/user/app
RUN chown -R 1000 /home/user
USER 1000
WORKDIR /home/user/app
ENV HOME=/home/user
ADD Pipfile /home/user/app
ADD Pipfile.lock /home/user/app
RUN pipenv install
ADD . /home/user/app
CMD ["pipenv", "run", "jupyter", "notebook", "--ip", "0.0.0.0"]
