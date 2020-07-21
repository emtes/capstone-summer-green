from random import randint
from locust import HttpUser, between, task


class PrimesUser(HttpUser):
    wait_time = between(2, 5)

    @task
    def get_n_primes(self):
        n = randint(1, 20_000)
        self.client.get("/primes?n=" + str(n))

    @task
    def get_n_palindromic_primes(self):
        n = randint(1, 100)
        self.client.get("/palindromes?n=" + str(n))
