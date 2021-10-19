/* eslint-disable @typescript-eslint/camelcase */
const versions: {
  [gccRelease: string]: {[platform: string]: {url: string; md5: string | null}};
} = {
  '10.3-2021.07': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.07/gcc-arm-none-eabi-10.3-2021.07-win32.zip',
      md5: 'fca12668002f8c52cfa174400fd2d03e',
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.07/gcc-arm-none-eabi-10.3-2021.07-mac-10.14.6.tar.bz2',
      md5: '42d5f143cdc303d73a3602fa5052c790',
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.07/gcc-arm-none-eabi-10.3-2021.07-x86_64-linux.tar.bz2',
      md5: 'b56ae639d9183c340f065ae114a30202',
    },
    linux_aarch64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10.3-2021.07/gcc-arm-none-eabi-10.3-2021.07-aarch64-linux.tar.bz2',
      md5: 'c20b0535d01f8d4418341d893c62a782',
    },
  },
  '10-2020-q4': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-win32.zip',
      md5: '5ee6542a2af847934177bc8fa1294c0d',
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-mac.tar.bz2',
      md5: 'e588d21be5a0cc9caa60938d2422b058',
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-x86_64-linux.tar.bz2',
      md5: '8312c4c91799885f222f663fc81f9a31',
    },
    linux_aarch64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-aarch64-linux.tar.bz2',
      md5: 'e588d21be5a0cc9caa60938d2422b058',
    },
  },
  '9-2020-q2': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-win32.zip',
      md5: '184b3397414485f224e7ba950989aab6',
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-mac.tar.bz2',
      md5: '75a171beac35453fd2f0f48b3cb239c3',
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2',
      md5: '2b9eeccc33470f9d3cda26983b9d2dc6',
    },
    linux_aarch64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-aarch64-linux.tar.bz2',
      md5: '000b0888cbe7b171e2225b29be1c327c',
    },
  },
  '9-2019-q4': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2019q4/gcc-arm-none-eabi-9-2019-q4-major-win32.zip',
      md5: '82525522fefbde0b7811263ee8172b10',
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2019q4/gcc-arm-none-eabi-9-2019-q4-major-mac.tar.bz2',
      md5: '241b64f0578db2cf146034fc5bcee3d4',
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2019q4/gcc-arm-none-eabi-9-2019-q4-major-x86_64-linux.tar.bz2',
      md5: 'fe0029de4f4ec43cf7008944e34ff8cc',
    },
    linux_aarch64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2019q4/gcc-arm-none-eabi-9-2019-q4-major-aarch64-linux.tar.bz2',
      md5: '0dfa059aae18fcf7d842e30c525076a4',
    },
  },
  '8-2019-q3': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2019q3/RC1.1/gcc-arm-none-eabi-8-2019-q3-update-win32.zip',
      md5: '5fa382a547abe0b0d5c0a6e9eaa75c7b',
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2019q3/RC1.1/gcc-arm-none-eabi-8-2019-q3-update-mac.tar.bz2',
      md5: '405cfbe54cee25a1b925ad0657f73924',
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2019q3/RC1.1/gcc-arm-none-eabi-8-2019-q3-update-linux.tar.bz2',
      md5: '6341f11972dac8de185646d0fbd73bfc',
    },
  },
  '8-2018-q4': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2018q4/gcc-arm-none-eabi-8-2018-q4-major-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2018q4/gcc-arm-none-eabi-8-2018-q4-major-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2018q4/gcc-arm-none-eabi-8-2018-q4-major-linux.tar.bz2',
      md5: null,
    },
  },
  '7-2018-q2': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-linux.tar.bz2',
      md5: null,
    },
  },
  '7-2017-q4': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2',
      md5: null,
    },
  },
  '6-2017-q2': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2017q2/gcc-arm-none-eabi-6-2017-q2-update-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2017q2/gcc-arm-none-eabi-6-2017-q2-update-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2017q2/gcc-arm-none-eabi-6-2017-q2-update-linux.tar.bz2',
      md5: null,
    },
  },
  '6-2017-q1': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6_1-2017q1/gcc-arm-none-eabi-6-2017-q1-update-win32-zip.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6_1-2017q1/gcc-arm-none-eabi-6-2017-q1-update-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6_1-2017q1/gcc-arm-none-eabi-6-2017-q1-update-linux.tar.bz2',
      md5: null,
    },
  },
  '6-2016-q4': {
    win32: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2016q4/gcc-arm-none-eabi-6_2-2016q4-20161216-win32-zip.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2016q4/gcc-arm-none-eabi-6_2-2016q4-20161216-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2016q4/gcc-arm-none-eabi-6_2-2016q4-20161216-linux.tar.bz2',
      md5: null,
    },
  },
  '5-2016-q3': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q3-update/+download/gcc-arm-none-eabi-5_4-2016q3-20160926-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q3-update/+download/gcc-arm-none-eabi-5_4-2016q3-20160926-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q3-update/+download/gcc-arm-none-eabi-5_4-2016q3-20160926-linux.tar.bz2',
      md5: null,
    },
  },
  '5-2016-q2': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q2-update/+download/gcc-arm-none-eabi-5_4-2016q2-20160622-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q2-update/+download/gcc-arm-none-eabi-5_4-2016q2-20160622-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q2-update/+download/gcc-arm-none-eabi-5_4-2016q2-20160622-linux.tar.bz2',
      md5: null,
    },
  },
  '5-2016-q1': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q1-update/+download/gcc-arm-none-eabi-5_3-2016q1-20160330-win32.zip',
      md5: '1ea9a1b83666a5a363018fba8a088879',
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q1-update/+download/gcc-arm-none-eabi-5_3-2016q1-20160330-mac.tar.bz2',
      md5: 'aa60d23587dc7456c79a7e39acdafe0b',
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q1-update/+download/gcc-arm-none-eabi-5_3-2016q1-20160330-linux.tar.bz2',
      md5: '5a261cac18c62d8b7e8c70beba2004bd',
    },
  },
  '5-2015-q4': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2015-q4-major/+download/gcc-arm-none-eabi-5_2-2015q4-20151219-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2015-q4-major/+download/gcc-arm-none-eabi-5_2-2015q4-20151219-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/5.0/5-2015-q4-major/+download/gcc-arm-none-eabi-5_2-2015q4-20151219-linux.tar.bz2',
      md5: null,
    },
  },
  '4.9-2015-q3': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q3-update/+download/gcc-arm-none-eabi-4_9-2015q3-20150921-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q3-update/+download/gcc-arm-none-eabi-4_9-2015q3-20150921-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q3-update/+download/gcc-arm-none-eabi-4_9-2015q3-20150921-linux.tar.bz2',
      md5: null,
    },
  },
  '4.9-2015-q2': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q2-update/+download/gcc-arm-none-eabi-4_9-2015q2-20150609-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q2-update/+download/gcc-arm-none-eabi-4_9-2015q2-20150609-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q2-update/+download/gcc-arm-none-eabi-4_9-2015q2-20150609-linux.tar.bz2',
      md5: null,
    },
  },
  '4.9-2015-q1': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-linux.tar.bz2',
      md5: null,
    },
  },
  '4.9-2014-q4': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2014-q4-major/+download/gcc-arm-none-eabi-4_9-2014q4-20141203-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2014-q4-major/+download/gcc-arm-none-eabi-4_9-2014q4-20141203-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2014-q4-major/+download/gcc-arm-none-eabi-4_9-2014q4-20141203-linux.tar.bz2',
      md5: null,
    },
  },
  '4.8-2014-q3': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q3-update/+download/gcc-arm-none-eabi-4_8-2014q3-20140805-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q3-update/+download/gcc-arm-none-eabi-4_8-2014q3-20140805-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q3-update/+download/gcc-arm-none-eabi-4_8-2014q3-20140805-linux.tar.bz2',
      md5: null,
    },
  },
  '4.8-2014-q2': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q2-update/+download/gcc-arm-none-eabi-4_8-2014q2-20140609-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q2-update/+download/gcc-arm-none-eabi-4_8-2014q2-20140609-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q2-update/+download/gcc-arm-none-eabi-4_8-2014q2-20140609-linux.tar.bz2',
      md5: null,
    },
  },
  '4.8-2014-q1': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q1-update/+download/gcc-arm-none-eabi-4_8-2014q1-20140314-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q1-update/+download/gcc-arm-none-eabi-4_8-2014q1-20140314-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q1-update/+download/gcc-arm-none-eabi-4_8-2014q1-20140314-linux.tar.bz2',
      md5: null,
    },
  },
  '4.7-2014-q2': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2014-q2-update/+download/gcc-arm-none-eabi-4_7-2014q2-20140408-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2014-q2-update/+download/gcc-arm-none-eabi-4_7-2014q2-20140408-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2014-q2-update/+download/gcc-arm-none-eabi-4_7-2014q2-20140408-linux.tar.bz2',
      md5: null,
    },
  },
  '4.8-2013-q4': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2013-q4-major/+download/gcc-arm-none-eabi-4_8-2013q4-20131204-win32.zip',
      md5: 'ca47c682f9b3bd14d0a6ce1f175716fa',
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2013-q4-major/+download/gcc-arm-none-eabi-4_8-2013q4-20131218-mac.tar.bz2',
      md5: '850caa23f01ea8c1e6abcc3c217d36f7',
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2013-q4-major/+download/gcc-arm-none-eabi-4_8-2013q4-20131204-linux.tar.bz2',
      md5: '4869e6a6e1dc11ea0835e8b8213bb194',
    },
  },
  '4.7-2013-q3': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q3-update/+download/gcc-arm-none-eabi-4_7-2013q3-20130916-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q3-update/+download/gcc-arm-none-eabi-4_7-2013q3-20130916-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q3-update/+download/gcc-arm-none-eabi-4_7-2013q3-20130916-linux.tar.bz2',
      md5: null,
    },
  },
  '4.7-2013-q2': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q2-update/+download/gcc-arm-none-eabi-4_7-2013q2-20130614-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q2-update/+download/gcc-arm-none-eabi-4_7-2013q2-20130614-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q2-update/+download/gcc-arm-none-eabi-4_7-2013q2-20130614-linux.tar.bz2',
      md5: null,
    },
  },
  '4.7-2013-q1': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q1-update/+download/gcc-arm-none-eabi-4_7-2013q1-20130313-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q1-update/+download/gcc-arm-none-eabi-4_7-2013q1-20130313-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q1-update/+download/gcc-arm-none-eabi-4_7-2013q1-20130313-linux.tar.bz2',
      md5: null,
    },
  },
  '4.7-2012-q4': {
    win32: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2012-q4-major/+download/gcc-arm-none-eabi-4_7-2012q4-20121208-win32.zip',
      md5: null,
    },
    mac_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2012-q4-major/+download/gcc-arm-none-eabi-4_7-2012q4-20121208-mac.tar.bz2',
      md5: null,
    },
    linux_x86_64: {
      url:
        'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2012-q4-major/+download/gcc-arm-none-eabi-4_7-2012q4-20121208-linux.tar.bz2',
      md5: null,
    },
  },
};
// Add latest tag to always point to latest release
versions['latest'] = versions['10.3-2021.07'];

export function availableVersions(): string[] {
  return Object.keys(versions);
}

export function distributionUrl(version: string, platform: string): string {
  let osName = '';
  switch (platform) {
    case 'darwin':
      osName = 'mac_x86_64';
      break;
    case 'linux':
      osName = 'linux_x86_64';
      break;
    case 'win32':
      osName = 'win32';
      break;
    default:
      throw new Error(`platform ${platform} is not supported`);
  }
  if (!versions.hasOwnProperty(version)) {
    throw new Error(`invalid GCC version ${version}. Available: ${availableVersions()}`);
  }
  if (!versions[version].hasOwnProperty(osName)) {
    throw new Error(`invalid platform ${osName}.`);
  }
  return versions[version][osName].url;
}
