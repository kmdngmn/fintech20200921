# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')
driver.get(
    'https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html')
