from selenium import webdriver
from selenium.webdriver.common.keys import Keys
driver = webdriver.Chrome('/home/joel/chromedriver')
driver.get("https://lima-lima.olx.com.pe/alquiler-de-autos-en-lima-iid-959259235")


elem = driver.find_element_by_partial_link_text('Mostrar n')
elem.click()

elem = driver.find_element_by_class_name('number')
print elem.text
#elem.send_keys("date")
# elem.send_keys(Keys.RETURN)
# assert "No results found." not in driver.page_source
# driver.close()